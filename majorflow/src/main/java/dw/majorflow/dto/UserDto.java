package dw.majorflow.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserDto {
    private String userId;
    private String userName;
    private String password;
    private LocalDate birthDate;
    private String phoneNumber;
    private String address;
    private String gender;
    private String email;
    private String nickname;
    private String genre;
}
