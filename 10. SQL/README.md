# SQL

SQL is the language, MySQL is the Database

## Installation Guide in linux

<details>
<summary>
In Arch linux, there is no direct cmd to install MySQL, instead we use MariaDB
</summary>

```
# Install MariaDB
sudo pacman -S mariadb mariadb-clients

# Initialize the MariaDB data directory
sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql

# Start and enable the MariaDB service
sudo systemctl enable mariadb
sudo systemctl start mariadb

# Secure the installation
sudo mysql_secure_installation

# Run mariadb-upgrade to update system tables
sudo mariadb-upgrade

# Verify the installation
sudo mariadb -u root

# Run MariaDB in terminal
mariadb

# Exit the terminal type:
EXIT
```
</details>

---
## Syllabus

<details>
<summary>Topics Covered in SQL</summary>

- [x] Databases
    - [x] Types of databases
        - [x] SQL
        - [x] NoSQL
- [x] SQL
    - [x] Why use SQL?
    - [x] Syntax
    - [x] Table Design
- [x] Tables
    - [x] Schema
    - [x] Tuples
- [x] Keywords
    - [x] CREATE
    - [x] DROP
    - [x] USE
    - [x] DATABASE
    - [x] TABLE
    - [x] INSERT INTO
    - [x] VALUES
    - [x] SELECT
    - [x] FROM
- [x] Database Queries
    - [x] CREATE
    - [x] Conditions with CREATE
    - [x] DROP
    - [x] Conditions with DROP
    - [x] SHOW (for DB and Tables)
- [x] Table Queries
- [x] DataTypes in SQL
    - [x] CHAR
    - [x] VARCHAR
    - [x] BLOB
    - [x] INT
    - [x] TINYINT
    - [x] BIGINT
    - [x] BIT
    - [x] FLOAT
    - [x] DOUBLE
    - [x] BOOLEAN
    - [x] DATE
    - [x] YEAR
    - [x] UNSIGNED


</details>
