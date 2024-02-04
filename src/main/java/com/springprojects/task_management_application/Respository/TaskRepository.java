package com.springprojects.task_management_application.Respository;

import com.springprojects.task_management_application.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task,Long> {
    Optional<Task> findByName(String name);


}
