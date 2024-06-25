package dw.majorflow.service;

import dw.majorflow.model.EduTech;
import dw.majorflow.repository.EduTechRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class EduTechService {

    @Autowired
    EduTechRepository edutechRepository;

    public EduTech getEduTechById(int EduTechId) {
        Optional<EduTech> eduTech = edutechRepository.findById(EduTechId);
        if (eduTech.isPresent()) {
            return eduTech.get();
        } else {
            throw new RuntimeException("Teacher not found with id: " + EduTechId);
        }
    }

    public EduTech saveEduTech(EduTech eduTech){
        return edutechRepository.save(eduTech);
    }
}
