package com.springprojects.task_management_application.Controller;


import com.springprojects.task_management_application.Model.Task;
import com.springprojects.task_management_application.Service.ITaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController()
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {
    private  final ITaskService taskService;

    @GetMapping
    public ResponseEntity<List<Task>> getStudents(){
        return  new ResponseEntity<>(taskService.getTasks(), HttpStatus.FOUND);
    }

    @PostMapping
    public Task addNewTask(@RequestBody Task task){
        return taskService.addNewTask(task);
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@RequestBody Task task, @PathVariable Long id){
        return taskService.updateTask(task,id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
    }

    @GetMapping("/task/{id}")
    public Task getTaskById(@PathVariable Long id){
        return taskService.getTheTaskById(id);
    }
}
