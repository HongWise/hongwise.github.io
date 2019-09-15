---
title: Oracle Database
---

# Placeholder for {{page.title}}

# Oracle Database Version Check
~~~ sql
SELECT * FROM v$version;
~~~
in case the view `v$version` is not accessible
~~~ sql
SELECT * FROM product_component_version;
~~~
See [Release Number Format](https://docs.oracle.com/database/121/ADMIN/dba.htm#ADMIN11033) to understand the version information.

# Multi-Node RAC Check
~~~ sql
select count(*) from gv$instance;
~~~

# Explain Plan
Generate and display the execution plan:
~~~ sql
EXPLAIN PLAN FOR sql-statement
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY)
~~~

~~~
SELECT /*UNIQUE_TEXT*/ FROM table WHERE condition;
SELECT t.* FROM v$sql s, table(DBMS_XPLAN.DISPLAY_CURSOR(s.sql_id, s.child_number)) t WHERE sql_text LIKE 'SELECT /*UNIQUE_TEXT*/%';
~~~

~~~
select /*+ gather_plan_statistics no_index(npp_transaction npp_transaction_idx02)*/ * from npp_transaction where execution_datetime > '2019-07-15';

select * from table(dbms_xplan.display_cursor(format=>'allstats last'));
~~~

Index hint
https://hoopercharles.wordpress.com/2011/07/11/what-would-cause-a-no_index-hint-to-not-work-as-expected/

[DBMS_XPLAN](https://docs.oracle.com/database/121/ARPLS/d_xplan.htm#ARPLS378)

# Others
### Drop table if exists
Solution 1 is preferred because the database object might not belong to the log in user.
Solution 1:
https://stackoverflow.com/questions/1799128/oracle-if-table-exists
~~~ sql
DECLARE PROCEDURE drop_synonym_if_exists(p_synonym VARCHAR)
  IS
  BEGIN
      EXECUTE IMMEDIATE 'DROP SYNONYM '||p_synonym;
      DBMS_Output.Put_Line(p_synonym || ' synonym dropped');
  EXCEPTION WHEN OTHERS THEN
      IF SQLCODE = -1434 THEN
          DBMS_Output.Put_Line(p_synonym || ' does not exist');
      ELSE
          DBMS_Output.Put_Line(' Unknown exception while dropping synonym');
          RAISE;
      END IF;
  END;

BEGIN
    drop_synonym_if_exists('BRD_BIC_BO_SUBSCRIPTION_VLD_SP');
    drop_synonym_if_exists('BRD_GET_HEADER_SP');
    drop_synonym_if_exists('BRD_GET_PARTICIPANT_TYPE_SP');
    drop_synonym_if_exists('BRD_PARTICIPANT_BIC_GET_SP');
    drop_synonym_if_exists('REF_ENVIRONMENT_VLD_SP');
END;
~~~

Solution 2:
~~~ sql
declare
   c int;
begin
   select count(*) into c from user_tables where table_name = upper('table_name');
   if c = 1 then
      execute immediate 'drop table table_name';
   end if;
end;
~~~

ORA-00054: resource busy and acquire with NOWAIT specified or timeout expired
~~~ sql
SELECT a.schemaname, a.username, a.machine, a.state, b.session_id, a.serial#, b.oracle_username, c.object_name
FROM v$session a, v$locked_object b, dba_objects c
WHERE a.sid=b.session_id AND b.object_id=c.object_id AND c.object_name = 'NPP_TRANSACTION';

ALTER SYSTEM KILL SESSION 'session_id,serial#'; -- replace session_id and serial# with the real value
~~~

what is the process flow after taking a query?

RAC
http://what-when-how.com/Tutorial/topic-996ljkisj/Expert-Oracle-RAC-Performance-Diagnostics-and-Tuning-608.html
http://oracle-help.com/oracle-rac/miscellaneous-oracle-rac-wait-events/