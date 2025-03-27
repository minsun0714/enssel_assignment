package com.example.api.service;

import com.example.api.domain.QUser;
import com.example.api.domain.User;
import com.example.api.dto.UserSearchDTO;
import com.example.api.repository.UserRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.DateTimePath;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    EntityManager em;

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers(Map<String, String> allRequestParams){
        JPAQueryFactory jq = new JPAQueryFactory(em);

        return jq.selectFrom(QUser.user)
                .where(
                        QUser.user.useYN.eq("Y"),
                        userIdContains(allRequestParams.get("userId")),
                        usernameContains(allRequestParams.get("username")),
                        registeredUserContains(allRequestParams.get("regiUser")),
                        updateUserContains(allRequestParams.get("updaUser")),
                        regiDtIsBetween(allRequestParams.get("regiDtFrom"), allRequestParams.get("regiDtTo")),
                        updaDtIsBetween(allRequestParams.get("updaDtFrom"), allRequestParams.get("updaDtTo"))
                )
                .fetch();
    }

    public List<UserSearchDTO> select(Map<String, String> allRequestParams) {
        JPAQueryFactory jq = new JPAQueryFactory(em);

        System.out.println("regiUser" + " " + allRequestParams.get("regiUser"));

        return jq.select(Projections.constructor(
                        UserSearchDTO.class,
                        formatDate(QUser.user.registeredDate),
                        QUser.user.username.count()
                ))
                .from(QUser.user)
                .where(
                        QUser.user.useYN.eq("Y"),
                        userIdContains(allRequestParams.get("userId")),
                        usernameContains(allRequestParams.get("username")),
                        registeredUserContains(allRequestParams.get("regiUser")),
                        updateUserContains(allRequestParams.get("updaUser")),
                        regiDtIsBetween(allRequestParams.get("regiDtFrom"), allRequestParams.get("regiDtTo")),
                        updaDtIsBetween(allRequestParams.get("updaDtFrom"), allRequestParams.get("updaDtTo"))
                )
                .groupBy(formatDate(QUser.user.registeredDate))
                .fetch();
    }

    @Transactional
    public User createUser(User user){
        User newUser = new User();
        newUser.setUserId(user.getUserId());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setRegisteredUser(user.getUserId());
        newUser.setUseYN("Y");
        return userRepository.save(newUser);
    }

    @Transactional
    public User updateUser(User user){
        User updatedUser = userRepository.findById(user.getUserId()).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));

        updatedUser.setUsername(user.getUsername());
        updatedUser.setPassword(user.getPassword());
        updatedUser.setUpdatedUser(user.getUserId());

        return userRepository.save(updatedUser);
    }

    @Transactional
    public void deleteUser(User user){
        User deletedUser = userRepository.findById(user.getUserId()).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));

        deletedUser.setUpdatedUser(user.getUserId());
        deletedUser.setUseYN("N");
        userRepository.save(deletedUser);

    }

    private BooleanExpression userIdContains(String userId) {
        return userId == null ? QUser.user.userId.contains(userId) : null;
    }

    private BooleanExpression usernameContains(String username) {
        return QUser.user.username.contains(username);
    }

    private BooleanExpression registeredUserContains(String registeredUser) {
        return QUser.user.registeredUser.contains(registeredUser);
    }

    private BooleanExpression updateUserContains(String updatedUser) {
        return !updatedUser.isEmpty() ? QUser.user.updatedUser.contains(updatedUser) : null;
    }

    private BooleanExpression regiDtIsBetween(String regiDtFrom, String regiDtTo) {
        return dateBetween(QUser.user.registeredDate, regiDtFrom, regiDtTo);
    }

    private BooleanExpression updaDtIsBetween(String updaDtFrom, String updaDtTo) {
        return dateBetween(QUser.user.updateDate, updaDtFrom, updaDtTo);
    }

    private BooleanExpression dateBetween(DateTimePath<LocalDateTime> dateField,
                                          String from, String to) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        try {
            LocalDateTime fromDate = from != null ? LocalDate.parse(from, formatter).atStartOfDay() : null;
            LocalDateTime toDate = to != null ? LocalDate.parse(to, formatter).atTime(23, 59, 59) : null;

            if (fromDate != null && toDate != null) {
                return dateField.between(fromDate, toDate);
            } else if (fromDate != null) {
                return dateField.goe(fromDate);
            } else if (toDate != null) {
                return dateField.loe(toDate);
            }
        } catch (Exception e) {
            System.out.println("날짜 변환 오류: " + e.getMessage());
        }
        return null;
    }

    private DateTemplate<String> formatDate(DateTimePath<LocalDateTime> date){
        DateTemplate<String> formattedDate = Expressions.dateTemplate(
                String.class,
                "FORMAT({0}, 'yyyy-MM-dd')",
                date
        );
        return formattedDate;
    }
}
