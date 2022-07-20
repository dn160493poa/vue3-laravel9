<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class TotalPostResource extends JsonResource
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
            'posts' => $this->collection,
            'total' => count($this->collection),
            'popularTags' => ['Crypto', 'Bitcoin', 'BlockChaine', 'ADA']
        ];
    }
}
