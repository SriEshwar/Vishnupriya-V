//Exception -It is a problem that occurs during the execution of a program, causing it to behave unexpectedly. We can handle exception but error can't handle.
//TYPES:1.Checked Exception - checked at compile time. - handled explicitly
//	2.Unchecked Exception  - checked at run time. - can't handled explicitly

import java.io.*;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.lang.reflect.*;
import java.util.*;

public class Exception_PracticeCode_VishnuPriya{
public class CheckedException{
    public static void main(String[] args) {
        // IOException: Handle I/O related operations
        try {
            FileReader fileReader = new FileReader("file.txt");
        } catch (IOException e) {
            System.out.println("IOException occurred: " + e.getMessage());
        }
        
        // SQLException - Handle SQL related  operations
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/test", "user", "password");
        } catch (SQLException e) {
            System.out.println("SQLException occurred: " + e.getMessage());
        }
        
        // ParseException
        try {
            String dateString = "invalid_date";
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date date = dateFormat.parse(dateString);
        } catch (ParseException e) {
            System.out.println("ParseException occurred: " + e.getMessage());
        }
        
        // ClassNotFoundException - Handle Class realted issue,class loading
        try {
            Class.forName("com.example.MyClass");
        } catch (ClassNotFoundException e) {
            System.out.println("ClassNotFoundException occurred: " + e.getMessage());
        }
        
        // InterruptedException - related to thread interruption
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("InterruptedException occurred: " + e.getMessage());
        }
        
        // NoSuchMethodException - Handling missing methods
        try {
            Class<?> cls = Class.forName("com.example.MyClass");
            cls.getMethod("myMethod");
        } catch (NoSuchMethodException | ClassNotFoundException e) {
            System.out.println("NoSuchMethodException occurred: " + e.getMessage());
        }
        
        // NoSuchFieldException - Handles missing fields issues
        try {
            Class<?> cls = Class.forName("com.example.MyClass");
            cls.getDeclaredField("myField");
        } catch (NoSuchFieldException | ClassNotFoundException e) {
            System.out.println("NoSuchFieldException occurred: " + e.getMessage());
        }
        
        // InstantiationException
        try {
            Class<?> cls = Class.forName("com.example.MyClass");
            Object obj = cls.newInstance();
        } catch (InstantiationException | IllegalAccessException | ClassNotFoundException e) {
            System.out.println("InstantiationException occurred: " + e.getMessage());
        }
        
        // IllegalAccessException - unauthorized access issue
        try {
            Class<?> cls = Class.forName("com.example.MyClass");
            Constructor<?> constructor = cls.getDeclaredConstructor();
            constructor.setAccessible(true);
            Object obj = constructor.newInstance();
        } catch (InstantiationException | IllegalAccessException | NoSuchMethodException | InvocationTargetException | ClassNotFoundException e) {
            System.out.println("IllegalAccessException occurred: " + e.getMessage());
        }
    }
}
public class UnCheckedException{
    public static void main(String[] args) {
        // ArithmeticException: Division by zero
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException occurred: " + e.getMessage());
        }
        
        // NullPointerException: Access null reference
        try {
            String str = null;
            int length = str.length(); 
        } catch (NullPointerException e) {
            System.out.println("NullPointerException occurred: " + e.getMessage());
        }
        
        // ArrayIndexOutOfBoundsException: Accessing invalid array index
        try {
            int[] arr = new int[5];
            int value = arr[10]; 
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException occurred: " + e.getMessage());
        }
        
        // ClassCastException: Invalid casting
        try {
            Object obj = "Hello";
            Integer num = (Integer) obj;
        } catch (ClassCastException e) {
            System.out.println("ClassCastException occurred: " + e.getMessage());
        }
        
        // NumberFormatException: Invalid numeric format
        try {
            int num = Integer.parseInt("abc"); 
        } catch (NumberFormatException e) {
            System.out.println("NumberFormatException occurred: " + e.getMessage());
        }
        
        // IllegalArgumentException: Invalid method argument
        try {
            List<String> list = new ArrayList<>();
            list.subList(1, 0); 
        } catch (IllegalArgumentException e) {
            System.out.println("IllegalArgumentException occurred: " + e.getMessage());
        }
        
        // IllegalStateException: Illegal object state
        try {
            Scanner scanner = new Scanner(System.in);
            scanner.close();
            scanner.next(); 
        } catch (IllegalStateException e) {
            System.out.println("IllegalStateException occurred: " + e.getMessage());
        }
        
        // UnsupportedOperationException: Unsupported operation
        try {
            List<String> list = Collections.singletonList("Hello");
            list.add("World"); 
        } catch (UnsupportedOperationException e) {
            System.out.println("UnsupportedOperationException occurred: " + e.getMessage());
        }
    }
}

}