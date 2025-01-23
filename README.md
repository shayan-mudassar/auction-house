# Auction House

Auction House is a comprehensive full-stack web application designed to facilitate online auctions, enabling users to seamlessly buy and sell items. This platform emphasizes security, user roles, and personalized experiences to ensure a robust and user-friendly environment.

## Features

- **Secure Authentication and Authorization**: Implements industry-standard practices to protect user data and ensure secure access.
- **Role-Based Access Control**: Differentiates functionalities and permissions based on user roles, such as buyers, sellers, and administrators.
- **Integrated Mail Client**: Allows users to communicate within the platform, enhancing interaction between buyers and sellers.
- **Personalized Recommendations**: Utilizes matrix factorization techniques to suggest items tailored to individual user preferences.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)
5. [Contact](#contact)

## Installation

### Prerequisites

- **Node.js** (version 14.21.3) and npm: Ensure they are installed on your system.
- **MySQL**: Set up a MySQL database or use a similar relational database.

### Backend Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shayan-mudassar/auction-house.git
   cd auction-house/api
   ```

2. **Configure Database**:

   - Update the `config.json` file with your MySQL credentials and settings.

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Initialize Sequelize**:

   ```bash
   npx sequelize init
   ```

5. **Set Up SSL/TLS**:

   - Generate SSL/TLS certificates using tools like `mkcert`.
   - Configure the application to use these certificates for encrypted transactions.

### Frontend Setup

1. **Navigate to Frontend Directory**:

   ```bash
   cd ../front
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage

1. **Start the Backend Server**:

   ```bash
   cd ../api
   npm start
   ```

2. **Start the Frontend Server**:

   ```bash
   cd ../front
   npm start
   ```

3. **Access the Application**:

   - Open your browser and navigate to `http://localhost:3000` to use the platform.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, please contact support@shayanmudassar.com.
