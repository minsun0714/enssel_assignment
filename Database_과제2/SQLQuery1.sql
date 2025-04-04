CREATE TABLE ROW_DATA
(
	SEQ	INT NOT NULL,
	RANDOM_DATA INT NOT NULL,
	IF_YN VARCHAR(1) NOT NULL DEFAULT 'Y',
	REGI_DT DATETIME DEFAULT(getdate()),
	UPDA_DT DATETIME,
	CONSTRAINT PK_ROW_DATA PRIMARY KEY (SEQ)
);


CREATE SEQUENCE SEQ_ROW_DATA
AS [int]
START WITH 1
INCREMENT BY 1;


CREATE PROCEDURE PRO_ROW_DATA
AS
BEGIN
	DECLARE @idx INT = 0;

	WHILE (@idx < 100)
	BEGIN
		INSERT INTO ROW_DATA (SEQ, RANDOM_DATA, IF_YN)
		VALUES
		(
			NEXT VALUE FOR SEQ_ROW_DATA,

			CAST(RAND() * 30000 AS INT),

			'Y'
		);

		SET @idx = @idx + 1;
	END
END

EXEC PRO_ROW_DATA;

SELECT * FROM ROW_DATA;

DROP SEQUENCE SEQ_ROW_DATA;

DROP TABLE ROW_DATA