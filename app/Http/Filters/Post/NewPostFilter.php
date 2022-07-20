<?php


namespace App\Http\Filters\Post;


use App\Http\Filters\QueryFilter;

class NewPostFilter extends QueryFilter
{
    public function title($title)
    {
        return $this->builder->where('title', $title);
    }
}
