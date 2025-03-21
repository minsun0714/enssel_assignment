package com.example.api.dto;


public class UserSearchDTO {
    private String registeredDate;
    private Long usernameCount;

    public UserSearchDTO() {
    }

    public UserSearchDTO(String registeredDate, Long usernameCount) {
        this.registeredDate = registeredDate;
        this.usernameCount = usernameCount;
    }

    public String getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(String registeredDate) {
        this.registeredDate = registeredDate;
    }

    public Long getUsernameCount() {
        return usernameCount;
    }

    public void setUsernameCount(Long usernameCount) {
        this.usernameCount = usernameCount;
    }
}
