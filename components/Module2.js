import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Module2 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Module 2: Cryptographic Foundations</Text>
      
      <Text style={styles.subHeading}>Basics of Cryptography</Text>
      <Text style={styles.paragraph}>
        Definition:{'\n'}
        Cryptography is the science of securing communication and data through the use of codes so that only those for whom the information is intended can read and process it.{'\n'}
        {'\n'}
        Types of Cryptography:{'\n'}
        Symmetric Cryptography: Uses the same key for encryption and decryption.{'\n'}
        Asymmetric Cryptography: Uses a pair of keys (public and private) for encryption and decryption.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Symmetric and Asymmetric Cryptography</Text>
      <Text style={styles.paragraph}>
        Symmetric Cryptography:{'\n'}
        Examples: AES (Advanced Encryption Standard), DES (Data Encryption Standard).{'\n'}
        Process:{'\n'}
        Plaintext is encrypted using a secret key to produce ciphertext.{'\n'}
        The same secret key is used to decrypt the ciphertext back to plaintext.{'\n'}
        Strengths: Fast and efficient for large amounts of data.{'\n'}
        Weaknesses: Key distribution problem; both parties must securely share the secret key.{'\n'}
        {'\n'}
        Asymmetric Cryptography:{'\n'}
        Examples: RSA (Rivest-Shamir-Adleman), ECC (Elliptic Curve Cryptography).{'\n'}
        Process:{'\n'}
        A public key encrypts the plaintext to produce ciphertext.{'\n'}
        A private key, known only to the recipient, decrypts the ciphertext back to plaintext.{'\n'}
        Strengths: Enhanced security; no need for secure key distribution.{'\n'}
        Weaknesses: Slower than symmetric encryption due to complex mathematical operations.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Hash Functions</Text>
      <Text style={styles.paragraph}>
        Definition:{'\n'}
        A hash function takes an input (or message) and returns a fixed-size string of bytes. The output is typically a "digest" that uniquely represents the input data.{'\n'}
        {'\n'}
        Characteristics:{'\n'}
        Deterministic: The same input always produces the same output.{'\n'}
        Fixed Length: The output length is always the same, regardless of input size.{'\n'}
        Pre-image Resistance: Difficult to reverse-engineer the input from the output.{'\n'}
        Collision Resistance: Difficult to find two different inputs that produce the same output.{'\n'}
        {'\n'}
        Examples:{'\n'}
        SHA-256 (Secure Hash Algorithm 256-bit){'\n'}
        MD5 (Message Digest Algorithm 5){'\n'}
      </Text>

      <Text style={styles.subHeading}>Public and Private Keys</Text>
      <Text style={styles.paragraph}>
        Public Key:{'\n'}
        Used for encryption and digital signatures.{'\n'}
        Can be openly shared without compromising security.{'\n'}
        {'\n'}
        Private Key:{'\n'}
        Used for decryption and verifying digital signatures.{'\n'}
        Must be kept secret to maintain security.{'\n'}
        {'\n'}
        Key Generation and Management:{'\n'}
        Generation: Public and private keys are generated as a pair using cryptographic algorithms (e.g., RSA, ECC).{'\n'}
        Management: Involves securely storing and handling keys to prevent unauthorized access or loss. This can include hardware security modules (HSMs), software-based key stores, and key management protocols.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Digital Signatures and Certificates</Text>
      <Text style={styles.paragraph}>
        Digital Signatures:{'\n'}
        Purpose: Verify the authenticity and integrity of a message or document.{'\n'}
        Process:{'\n'}
        The sender hashes the message.{'\n'}
        The sender encrypts the hash with their private key, creating the digital signature.{'\n'}
        The recipient decrypts the signature with the sender’s public key to verify the hash and thus the integrity and authenticity of the message.{'\n'}
        {'\n'}
        Certificates:{'\n'}
        Purpose: Provide a means of establishing trust in the identity of the certificate holder.{'\n'}
        Components: Include the public key, the identity of the certificate holder, and the digital signature of a certificate authority (CA).{'\n'}
        Usage: Commonly used in SSL/TLS to secure web communications.{'\n'}
        {'\n'}
        Role in Blockchain:{'\n'}
        Public and Private Keys: Ensure secure transactions and user authentication.{'\n'}
        Hash Functions: Maintain data integrity and secure block linking.{'\n'}
        Digital Signatures: Authenticate transactions and data entries.{'\n'}
        Certificates: Secure communications between nodes and users.{'\n'}
        {'\n'}
        Certificate Authorities (CAs):{'\n'}
        Definition: Trusted entities that issue digital certificates.{'\n'}
        Role: Validate the identities of entities (e.g., websites, individuals) and bind public keys to those identities through digital certificates.{'\n'}
        Trust Model: Blockchain systems may use a decentralized trust model to avoid reliance on centralized CAs.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Lab Exercises</Text>
      <Text style={styles.paragraph}>
        Lab 2: Cryptographic Implementations{'\n'}
        Objective: Implement basic cryptographic operations, including key generation, encryption/decryption, hashing, and digital signatures.{'\n'}
        {'\n'}
        Step-by-Step Instructions:{'\n'}
        {'\n'}
        Symmetric Encryption:{'\n'}
        Tools: Python (cryptography library).{'\n'}
        Steps:{'\n'}
        Install the cryptography library (pip install cryptography).{'\n'}
        Write a script to generate a symmetric key using AES.{'\n'}
        Encrypt a plaintext message using the generated key.{'\n'}
        Decrypt the ciphertext to retrieve the original message.{'\n'}
        {'\n'}
        Asymmetric Encryption:{'\n'}
        Tools: Python (cryptography library).{'\n'}
        Steps:{'\n'}
        Generate a pair of RSA keys (public and private).{'\n'}
        Encrypt a plaintext message using the public key.{'\n'}
        Decrypt the ciphertext using the private key.{'\n'}
        {'\n'}
        Hash Functions:{'\n'}
        Tools: Python (hashlib library).{'\n'}
        Steps:{'\n'}
        Write a script to hash a plaintext message using SHA-256.{'\n'}
        Verify the integrity of the message by comparing the hash values.{'\n'}
        {'\n'}
        Digital Signatures:{'\n'}
        Tools: Python (cryptography library).{'\n'}
        Steps:{'\n'}
        Generate RSA keys.{'\n'}
        Hash a message and sign the hash using the private key.{'\n'}
        Verify the signature using the public key.{'\n'}
        {'\n'}
        Certificate Creation and Management:{'\n'}
        Tools: OpenSSL.{'\n'}
        Steps:{'\n'}
        Generate a private key and a certificate signing request (CSR).{'\n'}
        Use OpenSSL to create a self-signed certificate.{'\n'}
        Verify the certificate details.{'\n'}
        {'\n'}
        Expected Outcomes:{'\n'}
        Understand the principles and applications of symmetric and asymmetric cryptography.{'\n'}
        Gain practical experience in implementing cryptographic algorithms.{'\n'}
        Learn to generate and manage cryptographic keys and digital certificates.{'\n'}
        {'\n'}
        Tools and Software Needed:{'\n'}
        Python with cryptography and hashlib libraries.{'\n'}
        OpenSSL.{'\n'}
        {'\n'}
        Assessment:{'\n'}
        Submission of the scripts and configurations used for the lab exercises.{'\n'}
        A brief report explaining the implementation process and results.{'\n'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default Module2;
