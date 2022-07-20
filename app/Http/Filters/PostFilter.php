<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class PostFilter extends AbstractFilter
{
    public const TAG = 'tag';

    protected function getCallbacks(): array
    {
        return [
            self::TAG => [$this, 'tag']
        ];
    }

    public function tag(Builder $builder, $value)
    {
        $builder->where('tag', 'ilike', "%{$value}%");
    }
}
