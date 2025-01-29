package com.jinwang;

import org.apache.commons.lang3.StringUtils;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        String str = "   Hello Apache Commons   ";
        System.out.println(StringUtils.trim(str));
    }
}
