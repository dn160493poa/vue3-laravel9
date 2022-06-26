<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'userData.name' => 'string|unique:users,name,' . $this->user()->id,
            'userData.email' => 'string|unique:users,email,' . $this->user()->id,
            'userData.avatar_image' => 'nullable|string',
            'userData.password' => 'nullable|string'
        ];
    }
}
