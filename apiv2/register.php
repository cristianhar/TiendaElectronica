<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$edad = $data['edad'];
$correo = $data['correo'];
$telefono = $data['telefono'];
$direccion = $data['direccion'];
$fecha = $data['fecha'];
$genero = $data['genero'];

$sql = "INSERT INTO usuarios (username, password, nombre, apellido, edad, correo, telefono, direccion, fecha, genero) VALUES ('$username', '$password', '$nombre', '$apellido', $edad, '$correo', '$telefono', '$direccion', '$fecha', '$genero')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
