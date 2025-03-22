// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FraudDetection {
    struct FraudReport {
        address reporter;
        string transactionId;
        string fraudType;
        uint256 timestamp;
        string aiConfidenceScore;
        bool isVerified;
    }

    FraudReport[] public fraudReports;
    mapping(string => bool) public reportedTransactions;

    event FraudReported(
        address indexed reporter,
        string transactionId,
        string fraudType,
        uint256 timestamp,
        string aiConfidenceScore
    );

    function reportFraud(
        string memory _transactionId,
        string memory _fraudType,
        string memory _aiConfidenceScore
    ) public {
        require(!reportedTransactions[_transactionId], "Transaction already reported");
        
        fraudReports.push(FraudReport({
            reporter: msg.sender,
            transactionId: _transactionId,
            fraudType: _fraudType,
            timestamp: block.timestamp,
            aiConfidenceScore: _aiConfidenceScore,
            isVerified: false
        }));

        reportedTransactions[_transactionId] = true;

        emit FraudReported(
            msg.sender,
            _transactionId,
            _fraudType,
            block.timestamp,
            _aiConfidenceScore
        );
    }

    function getFraudReport(uint256 _index) public view returns (
        address reporter,
        string memory transactionId,
        string memory fraudType,
        uint256 timestamp,
        string memory aiConfidenceScore,
        bool isVerified
    ) {
        require(_index < fraudReports.length, "Index out of bounds");
        FraudReport memory report = fraudReports[_index];
        return (
            report.reporter,
            report.transactionId,
            report.fraudType,
            report.timestamp,
            report.aiConfidenceScore,
            report.isVerified
        );
    }

    function getTotalReports() public view returns (uint256) {
        return fraudReports.length;
    }
} 