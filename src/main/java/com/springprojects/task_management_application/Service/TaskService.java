package com.springprojects.task_management_application.Service;

import com.springprojects.task_management_application.Service.ITaskService;
import com.springprojects.task_management_application.Exception.TaskAlreadyExistsException;
import com.springprojects.task_management_application.Exception.TaskNotFoundException;
import com.springprojects.task_management_application.Model.Task;
import com.springprojects.task_management_application.Respository.TaskRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class TaskService implements ITaskService {

    private final TaskRepository taskRepository;//injected dependency
    @Override
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTheTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(()-> new TaskNotFoundException("Sorry, The task " +
                "your are looking for  with the Id"+id+"is not found"));
    }

    @Override
    public Task addNewTask(Task task) {
            if(taskAlreadyExists(task.getName())){
                throw new TaskAlreadyExistsException(task.getName()+" already exists");
            }
           return taskRepository.save(task);
    }

    private boolean taskAlreadyExists(String name){
        return taskRepository.findByName(name).isPresent();
    }

    @Override
    public Task updateTask(Task task,Long id) {
        return taskRepository.findById(id).map(tk ->{
            tk.setName(task.getName());
            tk.setDescription(task.getDescription());
            tk.setStatus(task.getStatus());
            tk.setTaskType(task.getTaskType());
            tk.setNumOfPersonInvolved(task.getNumOfPersonInvolved());
            return taskRepository.save(tk);

        }).orElseThrow(()-> new TaskNotFoundException("sorry,this task could not be found"));
    }

    @Override
    public void deleteTask(Long id) {
        if(!taskRepository.existsById(id)){
            throw new TaskNotFoundException("Sorry task could not found");
        }
        taskRepository.deleteById(id);

    }
}
