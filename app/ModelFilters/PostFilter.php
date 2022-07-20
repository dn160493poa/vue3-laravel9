<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class PostFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function selectedTag($ids)
    {
//        return $this->related('tags', 'title', 'ilike', $volume);
        return $this->whereHas('roles', function($query) use ($ids)
        {
            return $query->whereIn('id', $ids);
        });
    }
}
