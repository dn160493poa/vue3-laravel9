<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\DeleteRequest;
use App\Services\Post\Service;

class DeleteController extends Controller
{
    public function __invoke(DeleteRequest $deleteRequest){

        $data = $deleteRequest->validated();

        $service = new Service();
        $delete_result = $service->deletePost($data);

        return response(['result' => $delete_result]);
    }
}
