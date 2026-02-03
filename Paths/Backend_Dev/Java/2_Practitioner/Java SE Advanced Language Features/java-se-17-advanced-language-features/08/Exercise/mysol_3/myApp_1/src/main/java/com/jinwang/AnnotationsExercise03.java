package com.jinwang;

import java.lang.reflect.Method;

public class AnnotationsExercise03 {

    public static String formatMethodValue(Object object, String methodName) throws Exception {
        Method method = object.getClass().getDeclaredMethod(methodName);
        method.setAccessible(true);
        Object methodValue = method.invoke(object);

        Loggable annotation = method.getAnnotation(Loggable.class);

        if (annotation != null) {
            String label = annotation.value();
            Class<? extends LoggableFormatter> formatterClass = annotation.formatter();

            LoggableFormatter formatter = formatterClass.getDeclaredConstructor().newInstance();
            return String.format("%s=[%s]", label, formatter.format(methodValue));
        } else {
            return null;
        }
    }
}
