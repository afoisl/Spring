package dw.majorflow.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginDto {
    @NotNull
    @NotBlank
    @Size(min = 3, max = 50)
    private String userId;

    @NotNull
    @NotBlank
    private String password;
}
