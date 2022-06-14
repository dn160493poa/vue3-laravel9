<?php

namespace App\Http\Resources\Post;

use App\Http\Resources\Tag\TagResource;
use App\Http\Resources\User\AuthorResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'createdAt' => $this->created_at,
            'slug' => $this->title,
            'title' => $this->title,
            'body' => $this->body,
            'description' => $this->description,
            'author' => new AuthorResource($this->author),
            //'tags' => TagResource::collection($this->tags)->implode('title', ', '),
            'tags' => collect(TagResource::collection($this->tags))->collapse(),
        ];
    }
}
