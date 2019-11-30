package com.mantiso;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by kevinj.
 */
public class ControllerServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        ApplicationSettings applicationSettings = new ApplicationSettings();
        CssClass cssClass = new CssClass();
        cssClass.setName("redUser");
        String[] tabNames = {"SignIn", "Home", "Profile", "Settings"};
        applicationSettings.setTabNames(tabNames);
        applicationSettings.setFormCssClass(cssClass);
        getServletContext().setAttribute("app", applicationSettings);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User user = new User();
        user.setName("Kevin");
        user.setEmail("kevinj@mantiso.com");

        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/WEB-INF/index.jsp");
        request.setAttribute("user", user);
        dispatcher.forward(request, response);
    }
}
