<?php
// hello.php (in project root)
header('Content-Type: text/html');

// Current date function
function getCurrentDate() {
    return date('Y-m-d H:i:s');
}

// Sample strata data
$units = [
    ["unit" => "101", "owner" => "Emma Thompson", "status" => "Occupied"],
    ["unit" => "203", "owner" => "James Wilson", "status" => "Vacant"],
    ["unit" => "305", "owner" => "Sarah Rodriguez", "status" => "Occupied"]
];

echo "<!DOCTYPE html>";
echo "<html lang='en'>";
echo "<head>";
echo "<meta charset='UTF-8'>";
echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
echo "<title>StrataSphere PHP Demo</title>";
echo "<style>";
echo "body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }";
echo "h1 { color: #2563eb; }";
echo "table { width: 100%; border-collapse: collapse; margin: 20px 0; }";
echo "th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }";
echo "th { background-color: #f2f2f2; font-weight: bold; }";
echo "tr:nth-child(even) { background-color: #f9f9f9; }";
echo ".info-box { background-color: #e6f7ff; border: 1px solid #91d5ff; padding: 15px; border-radius: 5px; margin: 20px 0; }";
echo ".date-box { background-color: #f6ffed; border: 1px solid #b7eb8f; padding: 10px; border-radius: 5px; margin-bottom: 20px; }";
echo "</style>";
echo "</head>";
echo "<body>";

echo "<h1>StrataSphere PHP Integration</h1>";

echo "<div class='date-box'>";
echo "<p><strong>Current Date and Time:</strong> " . getCurrentDate() . "</p>";
echo "</div>";

echo "<h2>Building Information</h2>";
echo "<p>Welcome to the PHP extension of the StrataSphere Strata Management System. This page demonstrates PHP functionality running on Vercel.</p>";

echo "<div class='info-box'>";
echo "<p>The StrataSphere system helps manage strata properties efficiently, providing tools for financial management, maintenance tracking, document storage, and community communication.</p>";
echo "</div>";

echo "<h2>Unit Information</h2>";
echo "<table>";
echo "<tr><th>Unit Number</th><th>Owner</th><th>Status</th></tr>";

foreach ($units as $unit) {
    echo "<tr>";
    echo "<td>" . $unit["unit"] . "</td>";
    echo "<td>" . $unit["owner"] . "</td>";
    echo "<td>" . $unit["status"] . "</td>";
    echo "</tr>";
}

echo "</table>";

echo "<h2>Building Statistics</h2>";
echo "<ul>";
echo "<li><strong>Total Units:</strong> " . count($units) . "</li>";
echo "<li><strong>Occupied Units:</strong> " . array_reduce($units, function($count, $unit) { 
    return $count + ($unit["status"] == "Occupied" ? 1 : 0); 
}, 0) . "</li>";
echo "<li><strong>Vacant Units:</strong> " . array_reduce($units, function($count, $unit) { 
    return $count + ($unit["status"] == "Vacant" ? 1 : 0); 
}, 0) . "</li>";
echo "</ul>";

echo "<p><em>Note: This page is generated using PHP " . phpversion() . " running on Vercel.</em></p>";

echo "</body>";
echo "</html>";
?>