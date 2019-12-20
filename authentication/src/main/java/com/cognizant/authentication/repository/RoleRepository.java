package com.cognizant.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.authentication.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

	Role findByRoleId(int id);

}
