package com.springprojects.task_management_application.Service;

import com.springprojects.task_management_application.Model.Task;

import java.util.List;

public interface ITaskService {
     List<Task> getTasks();

     Task getTheTaskById(Long id);

     Task addNewTask(Task task);


     Task updateTask(Task task,Long id);

     void deleteTask(Long id);
}
