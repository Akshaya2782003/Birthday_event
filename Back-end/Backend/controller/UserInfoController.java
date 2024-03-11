package com.birthday.event.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.UserInfoDto;
import com.birthday.event.service.UserInfoService;

import java.util.*;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/users")
public class UserInfoController {

    private UserInfoService userInfoService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDto> getUserInfo(@PathVariable("userId") Integer userId) {
        UserInfoDto userInfoDto = userInfoService.getUserInfoById(userId);
        return ResponseEntity.ok(userInfoDto);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{userId}")
    public ResponseEntity<UserInfoDto> updateUserInfo(@PathVariable("userId") Integer userId, @RequestBody UserInfoDto userInfoDto) {
        UserInfoDto updatedUserInfo = userInfoService.updateUserInfo(userId, userInfoDto);
        return ResponseEntity.ok(updatedUserInfo);
    }
    @GetMapping("/roles/{username}")
    public ResponseEntity<List<String>> getUserRolesByName(@PathVariable("username") String username) {
        List<String> roles = userInfoService.getUserRolesByName(username);
        return ResponseEntity.ok(roles);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable("userId") Integer userId) {
        userInfoService.deleteUserInfo(userId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/id/{username}")
    public ResponseEntity<Integer> getUserIdByName(@PathVariable("username") String username) {
        Integer userId = userInfoService.getUserIdByName(username);
        return ResponseEntity.ok(userId);
    }
}
