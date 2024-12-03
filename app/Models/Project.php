<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    protected $fillable = ['image_path', 'name', 'description', 'status', 'due_date', 'created_by', 'updated_by'];

    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function createdBy(): belongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(): belongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
