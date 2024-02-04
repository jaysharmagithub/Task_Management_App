package com.springprojects.task_management_application.Model;

import jakarta.persistence.*;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="task_name")

    private String name;
    @Column(name="task_description")
    private  String description;

    @Column(name="status")
    private  String status;
    @Column(name="task_Type")
    private String taskType;
    @Column(name = "num_of_person_involved")
    private Integer numOfPersonInvolved;


}
