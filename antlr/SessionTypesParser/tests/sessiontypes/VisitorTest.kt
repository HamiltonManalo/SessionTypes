package tests.uk.ac.brunel.sessiontypes

import org.junit.Assert
import org.junit.Before
import org.junit.Test
import sun.plugin2.message.Message
import uk.ac.brunel.sessiontypes.parsing.MessageType
import uk.ac.brunel.sessiontypes.parsing.Transition
import uk.ac.brunel.sessiontypes.parsing.generateTypes.buildTransitionType
import uk.ac.brunel.sessiontypes.parsing.generateTypes.generateTransitions


internal class VisitorTest {
    @Before
    fun setUp() {

    }
    @Test
    fun visitProtocol() {
        Assert.assertTrue(true)
    }

    @Test
    fun transitionTypeMadeCorrectly() {
        val transition = ""
        val result = buildTransitionType(Transition())
        println(result)
    }

    @Test
    fun generateReturnsString() {}
}