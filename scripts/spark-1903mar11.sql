/*
DROP TABLE BEAR;
DROP TABLE BEAR_TYPE;
DROP TABLE CAVE;
DROP TABLE BEEHIVE;
DROP TABLE BEAR_BEEHIVE;
--SCRIPTS OFTEN BEGIN WITH DROP STATEMENTS TO ENSURE NO NAMING CLASHES

--TABLE CREATION WITH PRIMARY KEYS

CREATE TABLE BEAR (
    BEAR_ID INTEGER PRIMARY KEY, --ADDING Primary Key TO THIS COLUMN
    BEAR_NAME VARCHAR2(100),
    BIRTHDATE DATE,
    WEIGHT NUMBER(6,2) DEFAULT 200.00,
    BEAR_TYPE_ID INTEGER NOT NULL, --THIS WILL BE A NON-NULLABLE FOREIGN KEY
    CAVE_ID INTEGER --THIS WILL BE A NULLABLE FOREIGN KEY
);
/
CREATE TABLE BEAR_TYPE (
    BEAR_TYPE_ID INTEGER PRIMARY KEY,
    BEAR_TYPE_NAME VARCHAR2(100)
);
/
CREATE TABLE CAVE (
    CAVE_ID INTEGER PRIMARY KEY,
    CAVE_NAME VARCHAR2(100),
    MAX_BEARS INTEGER DEFAULT 4
);
/
CREATE TABLE BEEHIVE (
    BEEHIVE_ID INTEGER PRIMARY KEY,
    LBS_HONEY NUMBER(5,2) DEFAULT 75.00
);
/
CREATE TABLE BEAR_BEEHIVE (
    BEAR_ID INTEGER,
    BEEHIVE_ID INTEGER,
    PRIMARY KEY (BEAR_ID, BEEHIVE_ID)
);
/

--FOREIGN KEY CONSTRAINTS: RULES PLACED ON CONTENTS OF A TABEL, AND LIMITS WHAT MAY BE INHERITED
--TYPES-- PRIMARAY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL
ALTER TABLE BEAR
ADD CONSTRAINT FK_BEAR_BEAR_TYPE
FOREIGN KEY (BEAR_TYPE_ID) REFERENCES BEAR_TYPE(BEAR_TYPE_ID);--one on left is bear table--
/

ALTER TABLE BEAR 
ADD CONSTRAINT FK_BEAR_CAVE
FOREIGN KEY (CAVE_ID) REFERENCES CAVE(CAVE_ID);
/

ALTER TABLE BEAR_BEEHIVE
ADD CONSTRAINT FK_BEAR_BEAR_BEEHIVE
FOREIGN KEY (BEAR_ID) REFERENCES BEAR(BEAR_ID);
/

ALTER TABLE BEAR_BEEHIVE
ADD CONSTRAINT FK_BEEHIVE_BEAR_BEEHIVE
FOREIGN KEY (BEEHIVE_ID) REFERENCES BEEHIVE(BEEHIVE_ID);
/

--ADD SOME DATA--
--2 DIFFERENT FORMATS FOR INSERTING DATA--
--FILL ALL COLUMNS, OR A SELECT FEW--
--CAVES--
INSERT INTO CAVE VALUES (27, 'TAMPA', 8); 
INSERT INTO CAVE (CAVE_ID, CAVE_NAME) VALUES (53, 'YELLOWSTONE'); --SPECIFYING THE COLUMNS SO WE DON'T NEED MAX BEARS COLUMN (IT'S DEFAULT)

UPDATE CAVE SET CAVE_NAME = 'SALT LAKE' WHERE CAVE_ID = 27;


INSERT ALL
INTO BEAR_TYPE
VALUES (34, 'GRIZZLY')
INTO BEAR_TYPE
VALUES (35, 'SUNBEAR')
SELECT * FROM DUAL; --DUAL IS A DUMMY TABLE-- 

--inserting without and with defaults--
INSERT ALL
INTO BEAR --dont need to specify columns because we're using all columns--
VALUES (1, 'BARRY', TO_DATE('1993-10-08', 'yyyy-mm-dd'), 350.00, 34, 53) --GRIZZLYS IN SALT LAKE
--need to specify columns, because we're using default weight for barriette--
INTO BEAR (BEAR_ID, BEAR_NAME, BIRTHDATE, BEAR_TYPE_ID, CAVE_ID)
VALUES (2, 'BARRIETTE', TO_DATE('1993-11-23', 'yyyy-mm-dd'), 34, 53)--GRIZZLY IN SALT LAKE
--another default weight bear--
INTO BEAR (BEAR_ID, BEAR_NAME, BIRTHDATE, BEAR_TYPE_ID, CAVE_ID)
VALUES (3, 'WILLIAM', TO_DATE('1987-02-01', 'yyyy-mm-dd'), 35, 27)--SUN BEAR IN TAMPA
SELECT* FROM DUAL;

INSERT ALL
INTO BEEHIVE
VALUES (1, 30.00)
INTO BEEHIVE
VALUES (2, 100.00)
SELECT * FROM DUAL;

INSERT ALL 
INTO BEAR_BEEHIVE
VALUES (3, 1)
INTO BEAR_BEEHIVE
VALUES(3, 2)
SELECT * FROM DUAL;


--create sequences to generate primary keys--

CREATE SEQUENCE SQ_BEAR_PK
START WITH 1000
INCREMENT BY 1;
/

CREATE SEQUENCE SQ_CAVE_PK
START WITH 1000
INCREMENT BY 1;
/

CREATE SEQUENCE SQ_BEEHIVE_PK
START WITH 1000
INCREMENT BY 1;
/

CREATE SEQUENCE SQ_BEAR_TYPE_PK
START WITH 1000
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER TR_INSERT_BEAR
BEFORE INSERT ON BEAR --specifying which dml trigger operation.  before or after, and which table--
FOR EACH ROW
BEGIN 
    SELECT SQ_BEAR_PK.NEXTVAL INTO :NEW.BEAR_ID FROM DUAL; --entering new bear, and giving it a bear id--
END;
/

CREATE OR REPLACE TRIGGER TR_INSERT_CAVE
BEFORE INSERT ON CAVE --specifying which dml trigger operation.  before or after, and which table--
FOR EACH ROW
BEGIN 
    SELECT SQ_CAVE_PK.NEXTVAL INTO :NEW.CAVE_ID FROM DUAL; --entering new bear, and giving it a bear id--
END;
/

CREATE OR REPLACE TRIGGER TR_INSERT_BEEHIVE
BEFORE INSERT ON BEEHIVE --specifying which dml trigger operation.  before or after, and which table--
FOR EACH ROW
BEGIN 
    SELECT SQ_BEEHIVE_PK.NEXTVAL INTO :NEW.BEEHIVE_ID FROM DUAL; --entering new bear, and giving it a bear id--
END;
/

CREATE OR REPLACE TRIGGER TR_INSERT_BEAR_TYPE
BEFORE INSERT ON BEAR_TYPE --specifying which dml trigger operation.  before or after, and which table--
FOR EACH ROW
BEGIN 
    SELECT SQ_BEAR_TYPE_PK.NEXTVAL INTO :NEW.BEAR_TYPE_ID FROM DUAL; --entering new bear, and giving it a bear id--
END;
/

INSERT INTO BEAR(BEAR_NAME, BIRTHDATE, BEAR_TYPE_ID, CAVE_ID)
VALUES('BILLY', TO_DATE('1987-02-01', 'yyyy-mm-dd'), 35, 27);



--ADD A CAVELESS BEAR WITH JOINS--
INSERT INTO BEAR(BEAR_NAME, BIRTHDATE, BEAR_TYPE_ID)
VALUES('SUNNIE',TO_DATE('1989-12-31', 'yyyy-mm-dd'), 35);
/

--ADD EMPTY CAVE--
INSERT INTO CAVE(CAVE_NAME)
VALUES('PHILLY');
/

SELECT*FROM BEAR;
SELECT*FROM CAVE;
--show cave details LEFT JOIN SHOWING ALL BEARS THAT HAVE CAVE
SELECT *
FROM BEAR B--ALIAS--
LEFT JOIN CAVE ON B.CAVE_ID = CAVE.CAVE_ID;

--NO PHILLY (no bear in that cave), YES SUNNY (caveless)--
SELECT B.BEAR_ID, B.BEAR_NAME, CAVE.CAVE_ID, CAVE.CAVE_NAME
FROM BEAR B--ALIAS--
LEFT JOIN CAVE ON B.CAVE_ID = CAVE.CAVE_ID;

--RIGHT JOIN--SHOWING ALL CAVES THAT HAVE BEARS
--NO SUNNY (no cave), YES PHILLY
SELECT B.BEAR_ID, B.BEAR_NAME, CAVE.CAVE_ID, CAVE.CAVE_NAME
FROM BEAR B--ALIAS--
RIGHT JOIN CAVE ON B.CAVE_ID = CAVE.CAVE_ID;

--FULL JOIN
--all bears, all caves
SELECT B.BEAR_ID, B.BEAR_NAME, CAVE.CAVE_ID, CAVE.CAVE_NAME
FROM BEAR B--ALIAS--
FULL JOIN CAVE ON B.CAVE_ID = CAVE.CAVE_ID;

--make a view with how many bears per cave--
CREATE VIEW VW_BEARS_PER_CAVE(CAVE, NUMBEAR)
AS
SELECT CAVE_NAME, COUNT(BEAR_ID) --SYSTEM DEFINED AGREGATE FUNCTION AS OPPOSED TO A SCALER FUNCTION
FROM BEAR, CAVE
WHERE BEAR.CAVE_ID = CAVE.CAVE_ID
GROUP BY CAVE_NAME;
SELECT * FROM VW_BEARS_PER_CAVE;


--USER DEFINED FUNCTION--

--USER-DEFINED FUNCTIONS
CREATE OR REPLACE FUNCTION FIND_MAX_NUMBER(X IN NUMBER, Y IN NUMBER)
RETURN NUMBER
IS 
Z NUMBER;
BEGIN
    IF X>Y THEN
    Z := X; --PL/SQL ASSIGNMENT OPERATOR
    ELSE
    Z := Y;
    END IF;
    RETURN Z;
END;

--CALL OUR FUNCTION!
DECLARE
FIRST_NUM NUMBER;
SECOND_NUM NUMBER;
MAX_NUM NUMBER;
BEGIN
    FIRST_NUM := 22;
    SECOND_NUM := 42;
    MAX_NUM := FIND_MAX_NUMBER(FIRST_NUM, SECOND_NUM);
    DBMS_OUTPUT.PUT_LINE('MAX: '||MAX_NUM);
END;

--CURSOR: POINTER TO THE 'ACTIVE SET'
--MOVE THROUGH A RESULT SET AND PROCESS EACH LINE
CREATE OR REPLACE FUNCTION PRINT_ALL_BEARS
RETURN SYS_REFCURSOR
IS
S SYS_REFCURSOR;
BEGIN
    OPEN S FOR 
    SELECT BEAR_ID, BEAR_NAME FROM BEAR;
    RETURN S;
END;

--INVOKE THE FUNCTION
DECLARE
S SYS_REFCURSOR;
SOME_ID BEAR.BEAR_ID%TYPE; --DECLARES SOME_ID IS THE SAME DATATYPE AS BEAR.BEAR_ID
SOME_NAME BEAR.BEAR_NAME%TYPE;
BEGIN
    S := PRINT_ALL_BEARS;
    LOOP
    FETCH S INTO SOME_ID, SOME_NAME; --GRAB VALUES IN COLUMNS OF NEXT ROW IN ACTIVE SET
    EXIT WHEN S%NOTFOUND;            --AND ASSIGN THEM TO SOME_ID, SOME_NAME
    DBMS_OUTPUT.PUT_LINE('ID: '||SOME_ID||', NAME: '||SOME_NAME);
    END LOOP;
    CLOSE S;
END;

--ADD CONSTRAINTS
ALTER TABLE BEAR ADD CONSTRAINT CK_BEAR_WEIGHT
CHECK (WEIGHT > 0);
/
ALTER TABLE BEEHIVE ADD CONSTRAINT CK_BEEHIVE_WEIGHT
CHECK (LBS_HONEY > 0);

INSERT INTO BEEHIVE (LBS_HONEY) VALUES (40.0);
INSERT INTO BEEHIVE (LBS_HONEY) VALUES (100.00);

INSERT INTO BEAR_BEEHIVE VALUES (1003, 1001);

--NOW, A STORED PROCEDURE
CREATE OR REPLACE PROCEDURE SP_FEED_BEAR(B_ID IN NUMBER, H_ID IN NUMBER, HONEY_AMT IN NUMBER, AMT_FED OUT NUMBER)
IS
BB_EXISTS INTEGER;
BEGIN
    --CHECK THAT THIS BEAR IS CORRECTLY MATCHED TO THIS BEEHIVE
    SELECT COUNT(BB.BEAR_ID) INTO BB_EXISTS
    FROM BEAR_BEEHIVE BB
    WHERE BB.BEAR_ID = B_ID
    AND BB.BEEHIVE_ID = H_ID;
    --DBMS_OUTPUT.PUT_LINE(BB_EXISTS);
    --IF IT IS, AND HONEY_AMT > 0 
    IF BB_EXISTS > 0 AND HONEY_AMT > 0 THEN
    --REDUCE HIVE WEIGHT
        UPDATE BEEHIVE SET LBS_HONEY = LBS_HONEY - HONEY_AMT
        WHERE BEEHIVE_ID = H_ID;
    --INCREASE BEAR WEIGHT
        UPDATE BEAR SET WEIGHT = WEIGHT + HONEY_AMT
        WHERE BEAR_ID = B_ID;
    --SET RETURN AMOUNT
        AMT_FED := HONEY_AMT;
    ELSE
        AMT_FED := 0;
    END IF;
    COMMIT;
    --EXCEPTION HANDLING!
    EXCEPTION
    --https://docs.oracle.com/cd/B10501_01/appdev.920/a96624/07_errs.htm 
        WHEN OTHERS THEN
        AMT_FED := 0;
        ROLLBACK;
END;

DECLARE
AMT_FED NUMBER;
BEGIN
SP_FEED_BEAR(1003,1001,30,AMT_FED);
DBMS_OUTPUT.PUT_LINE('FED BEAR: '||AMT_FED||' POUNDS OF HONEY');
END;

*/


