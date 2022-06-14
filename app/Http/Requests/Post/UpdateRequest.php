<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'post' => 'required|integer|exists:posts,id',
            'data.title' => 'required|string',
            'data.description' => 'required|string',
            'data.body' => 'required|string',
            'data.tagList.*' => 'required|string'
        ];
    }
}
