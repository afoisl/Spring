package dw.majorflow.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {
    private String userId;
    private String password;
    private String userName;
    private String nickname;
    private String email;
    private String gender;
    private String phoneNumber;
    private String address;
    private String birthDate;
    private String genre;
}
