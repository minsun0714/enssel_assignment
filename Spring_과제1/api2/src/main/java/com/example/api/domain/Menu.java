package com.example.api.domain;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "TEST_minsun071_Menu")
@EntityListeners(AuditingEntityListener.class)
public class Menu {
    public Menu() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MENU_ID", nullable = false)
    private int menuId;

    @Column(name = "MENU_NM", nullable = false)
    private String menuname;

    @Column(name = "SORT", nullable = false)
    private int sort;

    @Column(name = "UPR_MENU_ID")
    private int upperMenuId;

    @Column(name = "URL", nullable = false)
    private String url;

    @Column(name = "USE_YN", nullable = false)
    private String useYN;

    @CreatedDate
    @Column(name = "REGI_DT", updatable = false)
    private LocalDateTime registeredDate;

    @Column(name = "REGI_USER", nullable = false)
    private String registeredUser;

    @LastModifiedDate
    @Column(name = "UPDA_DT")
    private LocalDateTime updatedDate;

    @Column(name = "UPDA_USER")
    private String updatedUser;

    public int getMenuId() { return menuId;}

    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public String getMenuname() {
        return menuname;
    }

    public void setMenuname(String menuname) {
        this.menuname = menuname;
    }

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public int getUpperMenuId() {
        return upperMenuId;
    }

    public void setUpperMenuId(int upperMenuId) {
        this.upperMenuId = upperMenuId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUseYN() {
        return useYN;
    }

    public void setUseYN(String useYN) {
        this.useYN = useYN;
    }

    public LocalDateTime getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(LocalDateTime registeredDate) {
        this.registeredDate = registeredDate;
    }

    public String getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(String registeredUser) {
        this.registeredUser = registeredUser;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updateDate) {
        this.updatedDate = updateDate;
    }

    public String getUpdatedUser() {
        return updatedUser;
    }

    public void setUpdatedUser(String updatedUser) {
        this.updatedUser = updatedUser;
    }
}
