<?php


namespace App\Services\Post;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;

class Service
{
    public function deletePost($data){
        try{
            DB::beginTransaction();

            $affected = DB::table('posts')
                ->where('id', $data["post"])
                ->update(['active' => false]);

            DB::commit();

        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $affected > 0 ? true : false;
    }

    public function storePost($data){
        try{
            DB::beginTransaction();
            $insertData = $data['data'];

            $tag_list = $insertData['tagList'];
            unset($insertData['tagList']);

            $insertData['author_id'] = auth()->user()->id;
            $post = Post::create($insertData);

            $tag_ids = [];

            foreach ($tag_list as $tag){
                $tag_id = Tag::firstOrCreate(
                    ['title' => $tag]
                )->id;

                array_push($tag_ids, $tag_id);
            }
            $post->tags()->attach($tag_ids);

            DB::commit();
        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $post;
    }

    public function updatePost($data, $post){
        try {
            DB::beginTransaction();
            $updateData = $data['data'];

            $tag_list = $updateData['tagList'];
            unset($updateData['tagList']);

            $post->update($updateData);
            $tag_ids = [];

            foreach ($tag_list as $tag){
                $tag_id = Tag::firstOrCreate(
                    ['title' => $tag]
                )->id;

                array_push($tag_ids, $tag_id);
            }
            $post->tags()->sync($tag_ids);

            DB::commit();
        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $post;
    }
}
