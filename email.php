<html>
    <body>
    <?php

        $email = "";

        if (isset($_POST["email"])) {
            $email = $_POST["email"];

            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "Your email address is sent!";
            } else {
                echo "Please enter a valid email.";
            }

        } else {
            echo "Email can't be blank.";
        }

    ?>

    </body>
</html>