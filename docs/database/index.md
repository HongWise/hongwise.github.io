---
title: Database
description: Database concepts, modeling and design techniques
---
# Concept
* Database
* DBMS
* Database Models
* Database Server

# RDBMS Rules
Codd's rule

# RDBMS Objects

# RDBMS Languages
* Data control language (DCL) – controls access to data;
* Data definition language (DDL) – defines data types such as creating, altering, or dropping and the relationships among them;
* Data manipulation language (DML) – performs tasks such as inserting, updating, or deleting data occurrences;
* Data query language (DQL) – allows searching for information and computing derived information.

# RDBMS Normalization

# RDBMS Transactions and Concurrency

# RDBMS Design and Modeling

# Database Index
1. Index foundation: how it works, structure, when it will be used and when it will not
1. Overhead of index
1. Related: Multi-block reads, clustering factor
1. Clustering index, non-clustering index, concatenated index, partial index, function-based index
1. Index with NULL column
1. Index with range search (<>, <, > BETWEEN)
1. Index with LIKE operator
1. Clustered vs non-clustered index
1. Order by
1. Bind Variables - Pros and Cons
1. Check the actual execution log
1. The deviation of actual execution from the execution plan
1. Index Skip Scan
1. Nested Loop Join
1. Specify index structure other than B-Tree

So, when do you NOT need to index a foreign key. In general when the following conditions are met:
https://asktom.oracle.com/pls/asktom/f?p=100:11:0::::P11_QUESTION_ID:292016138754
* you do NOT delete from the parent table. (especially with delete cascade -- it is a double whammy)
* you do NOT update the parent tables unique/primary key value.
* you do NOT join from the PARENT to the CHILD (like DEPT->EMP).


# References
* [Use the index, Luke](https://use-the-index-luke.com)
* [How does database indexing work](https://stackoverflow.com/questions/1108/how-does-database-indexing-work)