<?php

namespace App\Http\Resources\Tag;

use App\Models\Tag;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    //public $collects = Tag::class;

    public function toArray($request)
    {
        return [
            $this->title
        ];
    }
}
