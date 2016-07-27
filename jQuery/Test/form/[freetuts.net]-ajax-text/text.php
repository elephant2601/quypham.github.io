<?php 
// Kết nối database
$conn = mysqli_connect('localhost', 'root', 'vertrigo', 'test') or die ('Can not connect to mysql');

// Lấy danh sách thành viên
$query = mysqli_query($conn, 'select * from member');

// Kiểm tra có dữ liệu không
if (mysqli_num_rows($query) > 0)
{
    echo '<table border="1" cellspacing="0" cellpadding="10">';
    echo '<tr>';
       echo '<td>';
           echo 'Username';
       echo '</td>';
       echo '<td>';
            echo 'Email';
       echo '</td>';
    echo '<tr>';
    
    // Lặp danh sách và hiển thị dạng table
    while ($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
        
        echo '<tr>';
            echo '<td>';
                echo $row['username'];
            echo '</td>';
            echo '<td>';
                echo $row['email'];
            echo '</td>';
        echo '<tr>';
    }
    echo '</table>';
}


?>