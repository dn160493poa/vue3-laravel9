<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Services\Post\Service;

use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Post $post){
        $service = new Service();
        $delete_result = $service->deletePost($post);

        return response(['result' => $delete_result]);
    }
}
