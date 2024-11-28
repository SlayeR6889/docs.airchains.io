# 🔐 zk-SNARK and FHE Integration

Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs) and Fully Homomorphic Encryption (FHE) are two advanced cryptographic techniques integrated into Airchains to enhance privacy, security, and verifiability.

### zk-SNARKs
zk-SNARKs enable the creation of succinct proofs that attest to the correctness of computations, which can be verified by others without gaining any knowledge about the input data.

While zk-SNARKs are excellent for maintaining confidentiality during verification, they have a drawback: the prover must access the private data to generate the proof. This necessity means that users must trust the prover with their sensitive information, potentially exposing it to risk.

### Combining zk-SNARKs and FHE: zkFHE
To address the limitations of both zk-SNARKs and FHE, we propose combining these technologies to create **zkFHE**. This innovative approach leverages the strengths of both techniques to provide robust privacy and verifiability.

1. **Encrypted Data Computation**: With zkFHE, users encrypt their data using FHE and send it to the prover for computation.
2. **Proof Generation**: The prover performs computations on the encrypted data and generates zk-SNARKs to prove the correctness of these computations without decrypting the data.
3. **Verification**: The verifier can validate the zk-SNARKs, ensuring that the computations were performed correctly without accessing the underlying data.

### Benefits of zkFHE
- **Enhanced Privacy**: Data remains encrypted during computations, ensuring that sensitive information is never exposed.
- **Robust Verifiability**: zk-SNARKs provide strong guarantees that computations are correct, even without revealing the underlying data.
- **Trust Minimization**: Users do not need to trust the prover with their plaintext data or the correctness of their computations, as zkFHE handles both aspects securely.

---

## Workflow for End Users with zkFHE

The integration of zk-SNARKs and FHE provides a seamless and secure workflow for end users to perform computations on their encrypted transaction data. Here’s how the process works:

1. **Data Encryption**: End users utilize the Airchains FHE SDK to encrypt their transaction data. This step ensures that the data is protected before being sent to the Airchains network.
2. **Submission to Stations**: The encrypted data is submitted to Stations, which are responsible for managing and processing the transactions. The encryption ensures that sensitive information remains confidential during this process.
3. **Processing by Stations**: Stations and other Airchains components perform their respective tasks on the encrypted data, including:
   - Transaction validation
   - Indexing
   - Batch aggregation
   - Proof generation
4. **Proof Generation**: After processing the encrypted data, Stations generate zk-SNARKs to prove the correctness of the computations. These proofs provide assurance that the operations were performed correctly without revealing the data.
5. **Verification and Settlement**: The generated zk-SNARKs are verified, and the processed transaction data is settled. The encrypted results are then returned to the end users.
6. **Decryption by End Users**: End users decrypt the returned results using their private keys to obtain the final outputs of the computations.

---

## Transaction Orchestration Protocol in zkFHE VMs

### Transaction Initialization
- A user initiates a transaction, specifying details such as sender/recipient addresses, gas price, gas limit, and additional payload data.
- The transaction data is encrypted using FHE to maintain privacy.
- The transaction is signed with the user’s private cryptographic key to ensure authenticity and integrity while keeping the data encrypted.

### Transaction Dissemination
- The FHE-encrypted transaction is disseminated across the network.
- zkFHE VMs perform initial validation checks:
  - Ensuring the transaction format adheres to protocol specifications.
  - Validating the gas limit and nonce.
- These validations maintain encryption, preserving data privacy while ensuring transaction legitimacy.

### Mempool Management
- Validated transactions are added to the zkFHE VMs mempool.
- Transactions are prioritized based on gas price, ensuring efficient network operation while maintaining encrypted data integrity.

### Batch Processing and zkProof Generation
- Transactions are grouped into batches for efficient processing.
- zkFHE VMs send batches to a sequencer, which generates zero-knowledge proofs to validate the correctness of the computations without revealing any data.

### Submission to Settlement and Data Availability Layers
- Batches are submitted to:
  - **Settlement Layer (Junction)**: For zk proof verification and transaction finality.
  - **Data Availability (DA) Layers**: For encrypted transaction data storage and retrieval.
- This dual submission ensures transaction integrity and secure storage of encrypted data.
