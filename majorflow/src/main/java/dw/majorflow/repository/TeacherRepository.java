package dw.majorflow.repository;

import dw.majorflow.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Optional<Teacher> findByTeacherId(Long teacherId);
=======
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce
}
