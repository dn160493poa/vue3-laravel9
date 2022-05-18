<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|string', // 'confirmed' = required_with:password_confirmation|same:password_confirmation
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email is required',
            'email.string' => 'Email must be string',
            'email.email' => 'Email must be in supporting email formats',
            'email.unique' => 'Email is already exist',
            'password.required' => 'Password is required',
            'password.string' => 'Password must be string',
        ];
    }
}
