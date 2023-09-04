public class Strings {
    public int findOccurrences(String s, char c) {
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                result++;
            }
        }

        return result;
    }

    public boolean isPalindromeByTwoPointers(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    public boolean isPalindromeByTwoStringReverse(String s) {
        // Using StringBuilder to reverse the string
        // StringBuilder sb = new StringBuilder(s);
        // sb.reverse();
        // return s.equals(sb.toString());

        // Using StringBuffer to reverse the string
        // StringBuffer sb1 = new StringBuffer(s);
        // sb1.reverse();
        // return s.equals(sb1.toString());

        // Using custom to reverse the string
        String revString = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            revString += s.charAt(i);
            System.out.println("Here");
        }

        return revString.equals(s);
    }

    public static void main(String[] args) {
        Strings stringSolver = new Strings();

        System.out.println(stringSolver.findOccurrences("deloiteeeete", 'e'));

        System.out.println(stringSolver.isPalindromeByTwoPointers("madam"));
    }
}