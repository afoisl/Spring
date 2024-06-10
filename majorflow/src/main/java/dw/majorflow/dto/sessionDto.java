package dw.majorflow.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class sessionDto {
    private String userId;
    private Collection<? extends GrantedAuthority> authority;
}
