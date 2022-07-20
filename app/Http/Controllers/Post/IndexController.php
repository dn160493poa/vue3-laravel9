<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\FilterRequest;
use App\Http\Resources\Post\PostResource;
use App\Http\Resources\Post\TotalPostResource;
use App\ModelFilters\PostFilter;
use App\Models\Post;

class IndexController extends Controller
{
    public function __invoke(FilterRequest $request){

        $data = $request->validated();

        $posts = Post::filter($data)->paginate(5);
        //dd($posts);
        //$posts = Post::filter($request->all())->paginateFilter(5);

//        $filter = app()->make(PostFilter::class, ['queryParams' => array_filter($data)]);
//        $posts = Post::filter($filter)->paginate(5);

        $postResource = PostResource::collection($posts);

        return new TotalPostResource($postResource);
    }
}
