package com.example.api.dto;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "TEST_minsun0714")
@Data
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @Column(name = "USER_ID", nullable = false)
    private String userId;

    @Column(name = "USER_NM", nullable = false)
    private String username;

    @Column(name = "PW", nullable = false)
    private String password;

    @CreatedDate
    @Column(name = "REGI_DT", updatable = false)
    private LocalDateTime registeredDate;

    @Column(name = "REGI_USER", nullable = false)
    private String registeredUser;

    @LastModifiedDate
    @Column(name = "UPDA_DT", insertable = false)
    private LocalDateTime updateDate;

    @Column(name = "UPDA_USER")
    private String updatedUser;

    @Column(name = "USE_YN", nullable = false)
    private String useYN;
}
