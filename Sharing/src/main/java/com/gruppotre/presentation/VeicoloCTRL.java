package com.gruppotre.presentation;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
    
@Controller
public class VeicoloCTRL {
   
    @RequestMapping("/veicolo")
	public String veicoli(){
        return "auto";
	}

}
