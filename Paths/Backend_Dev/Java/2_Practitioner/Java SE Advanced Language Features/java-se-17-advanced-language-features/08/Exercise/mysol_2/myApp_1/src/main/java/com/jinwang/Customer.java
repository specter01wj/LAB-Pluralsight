package com.jinwang;

import java.time.LocalDate;

@Loggable // ✅ You can annotate the whole class too if desired, but not required
public class Customer {

    @Loggable // ✅ Field annotation without any parameters
    private long id;

    private String name;
    private LocalDate birthDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Loggable("name") // ✅ With 'value' parameter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Loggable(value = "birthDate", formatter = LocalDateLoggableFormatter.class) // ✅ Full annotation
    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }
}
