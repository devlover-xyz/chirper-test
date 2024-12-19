<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:admin'])->name('admin.')->group(function () {
    Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('dasborad');
});
