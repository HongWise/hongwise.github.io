---
title: ANSI/ISO SQL
description: A declarative language designed for querying and managing data in an RDBMS
---
# Introduction

# SQL Data Types

|DATA TYPE              |SPEC   |DESCRIPTION
|-----------------------|-------|-----------
|BIT(n)                 |SQL92  |A sequence of n bits, each having the value of 0 or 1
|BIT VARYING(n)         |SQL92  |A sequence of maximum of n bits
|CHAR(n)                |SQL92  |Fixed-length n-character string, padded with spaces when needed
|VARCHAR(n)             |SQL92  |Variable-length maximum of n-character string, trailing spaces trimmed automatically
|NCHAR(n)               |SQL92  |Same as CHAR(n), store UNICODE characters with one character consumes 2 bytes
|NVARCH(n)              |SQL92  |Same as VARCHAR(n), store UNICODE characters with one character consumes 2 bytes
|CLOB                   |SQL99  |Character large object
|NCLOB                  |SQL99  |Same as CLOB, store UNICODE characters with one character consumes 2 bytes
|BLOB                   |SQL99  |Binary strings in hexadecimal format with no reference to character set or length limit
|INTEGER                |SQL92  |Exact numeric values with default precision of 10 (4 bytes)
|SMALLINT               |SQL92  |Exact numeric values with default precision of 5 (2 bytes)
|BIGINT                 |SQL2003|Exact numeric values with default precision of 19 (? bytes)
|DECIMAL(p,s)           |SQL92  |Exact numeric values with a definable precision p and a definable scale s
|NUMERIC(p,s)           |SQL92  |Exact numeric values with a definable precision p and a definable scale s
|REAL                   |SQL92  |Approximate numerical, mantissa precision 7
|FLOAT(p,s)             |SQL92  |Approximate numerical, mantissa precision 16
|DOUBLE PRECISION       |SQL92  |Approximate numerical, mantissa precision 16
|BOOLEAN                |SQL99  |Truth values (TRUE or FALSE)
|DATE                   |SQL92  |
|TIME                   |SQL92  |
|TIME WITH TIMEZONE     |SQL92  |
|TIMESTAMP              |SQL92  |
|TIMESTAMP WITH TIMEZONE|SQL92  |
|INTERVAL               |SQL92  |A set of time values of span of time
|XML                    |SQL2003|Represent a tree-based internal structure which is based on XML Infoset
|Array                  |SQL92  |Fixed-length and ordered collection of elements
|MULTISET               |SQL92  |Variable-length and unordered collection of elements

# Constraints

# SQL Functions

# SQL Statements

## DQL

## DDL

## DCL

## DML

# References
* [SQL Standard](https://modern-sql.com/standard)
* [SQL92](http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt)
* [SQL99](https://crate.io/docs/sql-99/en/latest)
* [SQL2003](https://jakewheat.github.io/sql-overview/sql-2003-foundation-grammar.html)
* [SQL in a Nutshell: A Desktop Quick Reference Guide 3rd Edition](https://www.amazon.com/SQL-Nutshell-Desktop-Reference-OReilly/dp/0596518846)