<?php


namespace App\Services\User;


use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Service
{
    public function updateUser($data, $user){
        try {
            DB::beginTransaction();

            $updateData = array_filter( $data['userData'], 'strlen' );

            if(isset($updateData['password'])){
                $updateData['password'] = Hash::make($updateData['password']);
            }

            $user->update($updateData);

            DB::commit();
        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $user;
    }


}
